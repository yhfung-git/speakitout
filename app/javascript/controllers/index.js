// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import EditController from "./edit_controller"
application.register("edit", EditController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import QuoteController from "./quote_controller"
application.register("quote", QuoteController)
