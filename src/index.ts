/*
 * Copyright 2020 Mia srl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint require-await: 0 */
'use strict'

import * as customPlugin from "@mia-platform/custom-plugin-lib";
const customService = require('@mia-platform/custom-plugin-lib')();
const robotHello = require("./handlers/robotHello");

/* eslint-disable-next-line no-unused-vars */
module.exports = customService(async function index(service:any) {
    service.addRawCustomPlugin('GET', '/hello', robotHello.handler, robotHello.schema)
})
