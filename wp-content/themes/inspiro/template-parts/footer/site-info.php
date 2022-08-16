<?php
/**
 * Displays footer site info
 *
 * @package Inspiro
 * @subpackage Inspiro_Lite
 * @since Inspiro 1.0.0
 * @version 1.0.0
 */

?>
<div class="site-info">
	<?php
	if ( function_exists( 'the_privacy_policy_link' ) ) {
		the_privacy_policy_link( '', '<span role="separator" aria-hidden="true"></span>' );
	}
	?>
	<span class="copyright">
		<span>
			<a href="<?php echo esc_url( __( 'https://intranet.vtv.gov.ve/', 'inspiro' ) ); ?>" target="_blank">ASI  SOMOS
				
			</a>
		</span>
		<span>
			<?php esc_html_e( 'Venezolana de Television VTV 8', 'inspiro' ); ?> <a href="<?php echo 'https://www.vtv.gob.ve//'; ?>" target="_blank" rel="nofollow">INTRANET</a>
		</span>
	</span>
</div><!-- .site-info -->

