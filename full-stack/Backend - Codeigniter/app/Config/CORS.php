<?php

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Cors extends BaseConfig
{
    /*
     |--------------------------------------------------------------------------
     | Cross-Origin Resource Sharing (CORS) Settings
     |--------------------------------------------------------------------------
     |
     | This configuration file allows you to enable Cross-Origin Resource
     | Sharing for your project. You can enable CORS for all routes or
     | specific methods and domains.
     |
     | The `Cors` class extends the `Myth\Auth\Config\Auth` class so that
     | you can enjoy any configuration that is specific to `Auth`.
     |
     */

    public $enabled = true;

    /*
     *--------------------------------------------------------------------------
     * Cross-Origin Resource Sharing (CORS) Headers
     *--------------------------------------------------------------------------
     *
     * Specify which headers are allowed for CORS requests.
     *
     * WARNING: If you choose to use "*", DO NOT SET the `allowedHeaders`
     * to `["*"]` as this will expose your server to attacks from the
     * Internet. Always be as restrictive as possible.
     *
     * A configuration that allows only the following headers is provided
     * below. Please uncomment or modify it as needed.
     */
    public array $allowedHeaders = [
        'Content-Type',
        'X-Requested-With',
        'Authorization',
        'Origin',
        'Accept',
    ];

    /*
     *--------------------------------------------------------------------------
     * Cross-Origin Resource Sharing (CORS) Methods
     *--------------------------------------------------------------------------
     *
     * Specify which methods are allowed for CORS requests.
     */
    public array $allowedMethods = [
        'GET',
        'POST',
        'OPTIONS',
        'PUT',
        'DELETE',
    ];

    /*
     *--------------------------------------------------------------------------
     * Cross-Origin Resource Sharing (CORS) Origin
     *--------------------------------------------------------------------------
     *
     * Specify which origins are allowed for CORS requests.
     *
     * A configuration that allows all origins is provided below. Please
     * uncomment or modify it as needed.
     */
    public array $allowedOrigins = [
//        '*',
        'http://localhost:3000/'
    ];

    /*
     *--------------------------------------------------------------------------
     * Cross-Origin Resource Sharing (CORS) Max Age
     *--------------------------------------------------------------------------
     *
     * Define how long the CORS preflight response should be cached.
     *
     * A configuration that disables caching is provided below. Please
     * uncomment or modify it as needed.
     */
    public int $maxAge = 0;

    /*
     *--------------------------------------------------------------------------
     * Cross-Origin Resource Sharing (CORS) Additional Headers
     *--------------------------------------------------------------------------
     *
     * Specify any additional headers you want to allow for CORS requests.
     */
    public array $exposedHeaders = [];
}
