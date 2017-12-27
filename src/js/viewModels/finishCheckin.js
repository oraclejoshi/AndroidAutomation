/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe'],
 function(oj, ko, $, app,mbe) {
  
    function FinishCheckinViewModel() {
      var self = this;

      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', content: '#pageContent'});
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });
     
      self.nextBtn=function(){
        oj.Router.rootInstance.go('dashboard');
      }
       
      self.handleActivated = function(info) {
        // Implement if needed
      };


      self.handleAttached = function(info) {
        // Implement if needed
        $(document).ready(function () {
          $("#checkOutLogo").attr("src",dashBoardData.profile_pic);
          $("#first_name").html(dashBoardData.first_name);
          $("#active_booking_number").html(dashBoardData.booking_details.active_booking_number);
          $("#selected_room").html(dashBoardData.booking_details.selected_room.room_no);

          $("#room_type").html(dashBoardData.booking_details.room_type);
          $("#room_guests").html(dashBoardData.booking_details.room_guests);
          $("#stay_duration").html(dashBoardData.booking_details.stay_duration);
          $("#room_tariff").html("$"+dashBoardData.booking_details.room_tariff);
          $("#checkIn").html(dashBoardData.booking_details.checkin_date+"-"+dashBoardData.booking_details.checkin_month+"-"+dashBoardData.booking_details.checkin_year+" "+dashBoardData.booking_details.checkin_time);
          $("#checkOut").html(dashBoardData.booking_details.checkout_date+"-"+dashBoardData.booking_details.checkout_month+"-"+dashBoardData.booking_details.checkout_year+" "+dashBoardData.booking_details.checkout_time);
          $("#beerQnty").text(dashBoardData.services.beer[0].count);
          $("#beerAmount").text(dashBoardData.services.beer[0].price);
          $("#others").text(dashBoardData.services.other_request.details);

          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $('#checkOutLogo').click(function(){
            console.log(dashBoardData);
           
            oj.Router.rootInstance.go('dashboard');
           
          });
          $('#serviceEdit').click(function(){
            oj.Router.rootInstance.go('services');
          });
          $('#otherServices').click(function(){
            oj.Router.rootInstance.go('servicesOthers');
          });
        });
      };

      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      
      self.handleDetached = function(info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new FinishCheckinViewModel();
  }
);
