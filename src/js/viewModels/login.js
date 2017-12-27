/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */

 // signin page viewModel
 // In a real app, replace it with your authentication and logic
'use strict';
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe',
        'ojs/ojrouter',
        'ojs/ojknockout',
        'ojs/ojcheckboxset',
        'ojs/ojinputtext',
        'ojs/ojbutton',
        'ojs/ojanimation'], function(oj, ko, $, app,mbe) {
  function loginViewModel() {
    var self = this;

    self.app = app;
   

// Header Config
//self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
    self.handleTransitionCompleted = function(info) {
      var animateOptions = { 'delay': 0, 'duration': '1s', 'timingFunction': 'ease-out' };
      oj.AnimationUtils['fadeIn']($('.demo-signin-bg')[0], animateOptions);
    }
   // self.userName = ko.observable("amy.marlin");
    self.passWord = ko.observable("Mobile1*");

     self.userName = ko.observable("steve.johns");
    // self.passWord = ko.observable("Mobile1*");
   
    //pass callbacks to the login to trigger page behavior on success or failure
    
    self.handleAttached = function (info) {
        // Implement if needed
        $(document).ready(function () {
            $(".loader").hide();
            $("#signIn").click(function(){
                $("#signIn").hide();
                $(".loader").show();
                mbe.authenticate(self.userName(), self.passWord(), self.loginSuccess, self.loginFailure);
            });
        });
    }

    //pass callbacks to the login to trigger page behavior on success or failure
   

    self.loginSuccess = function (response) {
        console.log(response);
        $("#signIn").show();
        $(".loader").hide();
        oj.Router.rootInstance.go('dashboard');
    };

    self.loginFailure = function (statusCode) {
        //self.isLoggedIn(false);
        $("#signIn").show();
        $(".loader").hide();
        alert("Invalid username or password");
        oj.Router.rootInstance.go('dashboard');
    };

  }
  return loginViewModel;
});
