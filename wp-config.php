<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */
 
  define('WP_HOME',"http://192.168.6.95/");
  define('WP_SITEURL',"http://192.168.6.95/");

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'intranet');

/** MySQL database username */
define('DB_USER', 'desarrollo');

/** MySQL database password */
define('DB_PASSWORD', 'd3s4rr0ll0');

/** MySQL hostname */
define('DB_HOST', '192.168.6.96');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Z+L07]e!IaB2POwwzMF]qaV4vSL2O0cJ6]:3RX@Tgo@[/fqdhg/V0]skB:Pa`7)D');
define('SECURE_AUTH_KEY',  'qc {jT&#+WI+|~^yh]/+:?1jr,b_O_p0;lRg>PcPL`Af4i{I6W7?Q~Z+GaGz)Z0]');
define('LOGGED_IN_KEY',    'XW(k6oW7dhTFC/wzzC9@e(9>cHheF1X[B:`#Xg0/n @?-Du(ehwIhglW|q<SS$h2');
define('NONCE_KEY',        'ja@|r)wvdvj77_*OR^.l~z=F$L6H4P_%&zDc11`F-&txbNhoLJ1}cY+YDdK$7kO)');
define('AUTH_SALT',        '7%Qw-Z=z}u%B n,Mp{ttU_$O$]uzLZI[O4xOaG7n0`)Frdtv@G%}{kIu,#YNt |C');
define('SECURE_AUTH_SALT', 'UdUfWtE2)8[O0UHQ8QJB)edCL?^W(l8[kV]Fa{%yKoRUFQ.z,DPN7gD_,CY?mBn:');
define('LOGGED_IN_SALT',   ';zcmzCd$q`>%YCxh&g-Oa>_437.$/->F R>CZ&{dD_k1P<w;$I{0KjABwaPJ5h>{');
define('NONCE_SALT',       'R>+/]m@f4SFO-w?Aef;MX,o1}kE$pAC`XOhZ~]<,8omcOHpC~YKDVhk2tl|Ofqy)');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FS_METHOD', 'direct');
