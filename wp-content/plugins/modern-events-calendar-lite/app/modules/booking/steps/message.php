<?php
/** no direct access **/
defined('MECEXEC') or die();

$event_id = $event->ID;
?>
<?php if(isset($message)): ?>
<div class="mec-event-book-message mec-gateway-message mec-success">
    <div class="<?php echo (isset($message_class) ? esc_attr($message_class) : ''); ?>">
        <?php echo MEC_kses::element(stripslashes($message)); ?>
    </div>
</div>
<?php endif;