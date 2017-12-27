/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe'],
 function(oj, ko, $, app,mbe) {
  
    function checkOutViewModel() {
      var self = this;

      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', content: '#pageContent'});
      }
      self.nextBtn=function(){
        oj.Router.rootInstance.go('dashboard');
      }
      // Add a close listener so we can move focus back to the toggle button when the drawer closes
      $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });
      self.handleActivated = function(info) {
        // Implement if needed
      };
      let payload = {
        "userId" : "amy.marlin"
      };
      self.handleAttached = function(info) {
        $(document).ready(function () {
          $(".loader").hide();
          $("#checkOutLogo").hide();
          $(".loaderr").show();
          mbe.invokeCustomAPI("CFICustomAPI/getUserData","POST",payload).then(function(response){
           
            dashBoardData = response.data;
            $("#checkOutLogo").show();
            $(".loaderr").hide();
            $("#checkOutLogo").attr("src",dashBoardData.profile_pic);
            $('#first_name').text(dashBoardData.first_name+", hope you enjoyed your stay with us!");
          $("#credit_card_number").text(dashBoardData.credit_card_number.substr(dashBoardData.credit_card_number.length - 4))
          $("#lblActibeBook").html(' '+dashBoardData.booking_details.active_booking_number);
          $('#room_type').html(dashBoardData.booking_details.room_type);
          var fromDuration=dashBoardData.booking_details.checkin_date+"/"+dashBoardData.booking_details.checkin_month+"/"+dashBoardData.booking_details.checkin_year;
          var toDuration=dashBoardData.booking_details.checkout_date+"/"+dashBoardData.booking_details.checkout_month+"/"+dashBoardData.booking_details.checkout_year;
          $("#duaration").text(fromDuration+" to "+toDuration);
          $("#spnGuests").html(' '+dashBoardData.booking_details.guests);
          $("#spnGuests").html(' '+dashBoardData.booking_details.guests);
          //var roomTarif=dashBoardData.booking_details.room_tarrif
          $("#room_tarrif").text('  '+dashBoardData.booking_details.room_tarrif);
          $("#services").text('  '+dashBoardData.services.beer[0].price);
          $("#otherservices").text('  '+dashBoardData.services.other_request.details);
          $(".imgProfile").attr("src",dashBoardData.profile_pic);
          $(".headerUserName").html(dashBoardData.first_name +" " +dashBoardData.last_name);
        });
          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $('#checkOutLogo').click(function(){
            
            oj.Router.rootInstance.go('dashboard');
          })
          $('#download').click(function(){
            mbe.invokeCustomAPI("CFICustomAPI/getBill?bookingid=123","GET",{}).then(function(response){
                console.log(response.data);
                window.open(response.data.billURL, '_blank');
            });
          })
        });
      };

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
    return new checkOutViewModel();
  }
);
