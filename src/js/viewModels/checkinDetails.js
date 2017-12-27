/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout','ojs/ojcore', 'knockout', 'jquery', 'appController','ojs/ojbutton'],
 function(ko,oj, ko, $, app) {
  
    function checkinDetailsViewModel() {
      var self = this;

      // Header Config
      //self.headerConfig = {'viewName': 'header', 'viewModelFactory': app.getHeaderModel()};
     

      self.backBtn=function(){
        oj.Router.rootInstance.go('dashboard');
      }
     
      self.nextBtn = function() {
        //alert(4)
        //app.pushClient.registerForNotifications();
        oj.Router.rootInstance.go('roomSelect');
      };

      $("#chekin").on("ojclick", function() { alert(12) });
      
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additional available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      self.handleAttached = function(info) {
      
        $(document).ready(function () {
          $("#hotel_name").html(dashBoardData.booking_details.hotel_name+','+dashBoardData.booking_details.hotel_city+","+dashBoardData.booking_details.hotel_state);
         $("#active_booking_number").html("Booking : "+dashBoardData.booking_details.active_booking_number);
         $("#hotel_contact_no").attr("href", "tel:"+dashBoardData.booking_details.hotel_contact_no);
         $('#dateCheckIN').html(dashBoardData.booking_details.checkin_date);
         $('#dayCheckIN').html(dashBoardData.booking_details.checkin_day);
         $('#monthCheckIN').html(dashBoardData.booking_details.checkin_month);
         
         $('#dateCheckOUT').html(dashBoardData.booking_details.checkout_date);
         $('#dayCheckOUT').html(dashBoardData.booking_details.checkout_day);
         $('#monthCheckOUT').html(dashBoardData.booking_details.checkout_month);
          $('#stay_duration').html("Stay duration "+dashBoardData.booking_details.stay_duration+" nights");
          $('#max').html(dashBoardData.weather.max);
          $('#min').html(dashBoardData.weather.min);
          $('#type').html(dashBoardData.weather.type);
          $('#room_type').html(dashBoardData.booking_details.room_type);
          $('#room_decsription').html(dashBoardData.booking_details.room_decsription);
          $('#room_bed').html(dashBoardData.booking_details.room_bed);

          $("#spnGuests").html(' '+dashBoardData.booking_details.guests);
          $("#spnStay").html(' '+dashBoardData.booking_details.stay_duration);
          $("#spnPrice").html(' '+dashBoardData.booking_details.room_tarrif);
          $("#spnCheckInTime").html(' '+dashBoardData.booking_details.checkin_time);
          $("#spnCheckOutTime").html(' '+dashBoardData.booking_details.checkout_time);   

         $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
        $('#roomDetails').click(function(){
          oj.Router.rootInstance.go('roomDetails');
         });

         $('.close').click(function(){
          $('#myModal').css('display', 'none');
        });
         $('#ok').click(function(){
          $('#myModal').css('display', 'none');
         });
          $('#upgrade').click(function(){
            $('#myModal').css('display', 'block');
         });
        });
        
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new checkinDetailsViewModel();
  }
);
