/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojbutton'],
  function (oj, ko, $, app) {

    function roomSelectViewModel() {
      var self = this;
     
      self.backBtn=function(){
        oj.Router.rootInstance.go('checkinDetails');
      }
     
      self.nextBtn = function () {
        $(document).ready(function () {
         var selectedRoom=0;
         $('.availbleRoom[data-select]').each(function(){
           if($(this).data("select")=='yes'){
             ++selectedRoom;
              dashBoardData.booking_details.selected_room.room_no=$(this).data("room");
              console.log(dashBoardData.booking_details.selected_room)
           }
          });
          if(selectedRoom>0){
            oj.Router.rootInstance.go('services');
           
          }
          else{
            $('#myModal').css('display', 'block');
          }
        });
        //
      };

      
      self.handleActivated = function (info) {
        // Implement if needed
      };

      self.handleAttached = function (info) {
        $(document).ready(function () {
          $('.close').click(function(){
            $('#myModal').css('display', 'none');
          });
           $('#ok').click(function(){
            $('#myModal').css('display', 'none');
           });
          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $(".availbleRoom").click(function () {
            $('.availbleRoom').css("background", "#bbe6bb");

            $('.availbleRoom').each(function(){
              $(this).data("select", 'no')
            });
            if ($(this).data("select") != 'yes') {
              $(this).data("select", 'yes');
              $(this).css("background", "#4cda4c");
            }
            else {
              $(this).data("select", 'no')
              $(this).css("background", "#bbe6bb");
            }
  
          });
        });
      };


      self.handleBindingsApplied = function (info) {
        // Implement if needed
      };

      self.handleDetached = function (info) {
        // Implement if needed
      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new roomSelectViewModel();
  }
);