<?php

if(!defined('ABSPATH')){
    exit;
}

if(!class_exists('acfe_pro_field_relationship')):

class acfe_pro_field_relationship extends acfe_field_extend{
    
    /**
     * initialize
     */
    function initialize(){
        
        $this->name = 'relationship';
        $this->defaults = array(
            'acfe_add_post'  => 0,
            'acfe_edit_post' => 0,
        );
    
        $this->add_action('wp_ajax_acfe/relationship/add_post',        array($this, 'ajax_add_post'));
        $this->add_action('wp_ajax_nopriv_acfe/relationship/add_post', array($this, 'ajax_add_post'));
        
    }
    
    
    /**
     * render_field_settings
     *
     * @param $field
     */
    function render_field_settings($field){
    
        acf_render_field_setting($field, array(
            'label'         => __('Allow Post Creation','acf'),
            'instructions'  => '',
            'name'          => 'acfe_add_post',
            'type'          => 'true_false',
            'ui'            => 1
        ));
    
        acf_render_field_setting($field, array(
            'label'         => __('Allow Post Edit','acf'),
            'instructions'  => '',
            'name'          => 'acfe_edit_post',
            'type'          => 'true_false',
            'ui'            => 1
        ));
        
    }
    
    
    /**
     * field_wrapper_attributes
     *
     * @param $wrapper
     * @param $field
     *
     * @return mixed
     */
    function field_wrapper_attributes($wrapper, $field){
        
        if($field['acfe_add_post']){
            $wrapper['data-acfe-add-post'] = 1;
        }
        
        if($field['acfe_edit_post']){
            $wrapper['data-acfe-edit-post'] = 1;
        }
        
        
        return $wrapper;
        
    }
    
    
    /**
     * render_field
     *
     * @param $field
     */
    function render_field($field){
        
        // bail early
        if(!acf_maybe_get($field, 'acfe_add_post')){
            return;
        }
        
        // allowed post types
        $allowed_post_types = acf_get_array($field['post_type']);
        $post_types = acf_get_pretty_post_types($allowed_post_types);
        $post_types = array_keys($post_types);
        
        // permission
        /*
        foreach(array_keys($post_types) as $i){
            
            // vars
            $post_type = $post_types[$i];
            $post_type_object = get_post_type_object($post_type);
            
            // check user can create post
            if(!current_user_can($post_type_object->cap->create_posts)){
                
                unset($post_types[$i]);
                
            }
        
        }
        */
        
        // bail early
        if(empty($post_types)){
            return;
        }
        
        // default button
        $button = array(
            'class' => 'button add-post',
            'href' => '#',
        );
        
        // only one post type
        if(count($post_types) === 1){
            
            // post type
            $post_type = reset($post_types);
            
            // href
            $button['href'] = $this->get_add_new_button_href($post_type);
            
        }
        
        ?>
        <div class="filter -add-post">
            <a <?php echo acf_esc_atts($button); ?>><?php echo _x('Add New', 'post'); ?></a>
        </div>
        
        <script type="text-html" class="acfe-relationship-popup">
            <ul><?php
            
                // get pretty post types
                $post_types = acf_get_pretty_post_types($post_types);
                
                // loop
                foreach($post_types as $post_type => $label){
    
                    // button
                    $button = array();
                    $button['href'] = $this->get_add_new_button_href($post_type);
                    
                    ?><li><a <?php echo acf_esc_atts($button); ?>><?php echo $label; ?></a></li><?php
                    
                }
            ?></ul>
        </script>
        <?php
    
    }
    
    
    /**
     * get_add_new_button_href
     *
     * @param $post_type
     *
     * @return string|null
     */
    function get_add_new_button_href($post_type){
    
        // href
        $href = admin_url(add_query_arg(
            array('post_type' => $post_type),
            'post-new.php'
        ));
    
        // attachment exception
        if($post_type === 'attachment'){
            $href = admin_url('media-new.php');
        }
        
        return $href;
        
    }
    
    
    /**
     * ajax_add_post
     *
     * wp_ajax_acfe/relationship/add_post
     */
    function ajax_add_post(){
        
        // validate action
        if(!acf_verify_ajax()){
            die();
        }
        
        // validate options
        $options = wp_parse_args($_POST, array(
            'field_key' => false,
            'pid' => 0,
        ));
        
        // get field
        $field = acf_get_field($options['field_key']);
        
        // field not found
        if(!$field){
            die();
        }
        
        // get post
        $post = get_post($options['pid']);
        
        ?>
        <span data-id="<?php echo esc_attr($options['pid']); ?>">
            <?php echo acf_esc_html(acf_get_field_type('relationship')->get_post_title($post, $field)); ?>
        </span>
        <?php
        
        // die
        die();
        
    }
    
}

acf_new_instance('acfe_pro_field_relationship');

endif;