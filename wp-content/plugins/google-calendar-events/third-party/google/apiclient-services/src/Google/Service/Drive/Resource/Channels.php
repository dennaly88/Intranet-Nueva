<?php

namespace SimpleCalendar\plugin_deps;

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/**
 * The "channels" collection of methods.
 * Typical usage is:
 *  <code>
 *   $driveService = new Google_Service_Drive(...);
 *   $channels = $driveService->channels;
 *  </code>
 */
class Google_Service_Drive_Resource_Channels extends \SimpleCalendar\plugin_deps\Google_Service_Resource
{
    /**
     * Stop watching resources through this channel (channels.stop)
     *
     * @param Google_Service_Drive_Channel $postBody
     * @param array $optParams Optional parameters.
     */
    public function stop(\SimpleCalendar\plugin_deps\Google_Service_Drive_Channel $postBody, $optParams = array())
    {
        $params = array('postBody' => $postBody);
        $params = \array_merge($params, $optParams);
        return $this->call('stop', array($params));
    }
}
