/**
* Copyright (c) 2014, 2017, Oracle and/or its affiliates.
* The Universal Permissive License (UPL), Version 1.0
*/
/*
* Your dashboard ViewModel code goes here
*/
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe', 'ojs/ojbutton'],
function (oj, ko, $, app,mbe) {

  function DashboardViewModel() {
    var self = this;
    
    //mbe.getAPI("/getUserData", self.Success, self.Failure);
    let payload = {
      "userId" : "amy.marlin"
    };
    
    self.Success = function (response) {
      console.log(response);
  };

  self.Failure = function (statusCode) {
      //self.isLoggedIn(false);
      console.log(statusCode);
  };
    //console.log(checkInStatus);
    // Header Config
   // self.headerConfig = { 'viewName': 'header', 'viewModelFactory': app.getHeaderModel() };
    var checkInStatus = localStorage.getItem("checkInStatus");
    checkInStatus = localStorage.getItem("checkInStatus");
    if (checkInStatus == 'YES') {
     $("#chekin").hide();
      $("#chekout").show();
     
    }
    else {
      $("#chekin").show();
      $("#chekout").hide();
    }
    // Drawer setup
    self.toggleDrawer = function() {
      return oj.OffcanvasUtils.toggle({selector: '#navDrawer', modality: 'modal', content: '#pageContent'});
    }
    // Add a close listener so we can move focus back to the toggle button when the drawer closes
    $("#navDrawer").on("ojclose", function() { $('#drawerToggleButton').focus(); });
    
    self.checkInBtn = function () {
      localStorage.setItem("checkInStatus", "NO");
      oj.Router.rootInstance.go('checkinDetails');
    };
    
   
    self.chekout = function () {
      $('#myModal').css('display', 'block');
      // var r = confirm("Are you sure to make check-out!");
      // if (r == true) {
      //   localStorage.setItem("checkInStatus", "NO");
      //   checkInStatus = localStorage.getItem("checkInStatus");
      //   if (checkInStatus == 'YES') {
      //     $("#chekin").hide();
      //     $("#chekout").show();
         
      //   }
      //   else {
      //     $("#chekin").show();
      //     $("#chekout").hide();
      //   }
      //   oj.Router.rootInstance.go('checkOut');
      // } else {
      //   localStorage.setItem("checkInStatus", "YES");
      // }
    };
    
    self.handleActivated = function (info) {
      // Implement if needed
    };

    self.handleAttached = function (info) {
      
      // Implement if needed
      $(document).ready(function () {
        $("#onDemandServiceNav").hide();
        if (localStorage.getItem("checkInStatus") == 'YES') {
          $("#onDemandServiceNav").show();
        }
      $('.close').click(function(){
        $('#myModal').css('display', 'none');
      });
       $('#cancel').click(function(){
        $('#myModal').css('display', 'none');
       });
       $('#ok').click(function(){
        localStorage.setItem("checkInStatus", "NO");
           checkInStatus = localStorage.getItem("checkInStatus");
           if (checkInStatus == 'YES') {
             $("#chekin").hide();
             $("#chekout").show();
           
           }
           else {
             $("#chekin").show();
             $("#chekout").hide();
           }
           $("#onDemandServiceNav").hide();
           oj.Router.rootInstance.go('checkOut');
      });
      
        $(".imgProfile").hide();
        $("#loadingImg").show();
        mbe.invokeCustomAPI("CFICustomAPI/getUserData","POST",payload).then(function(response){
          dashBoardData = response.data;
          
              $("#credit_card_number").text(dashBoardData.credit_card_number.substr(dashBoardData.credit_card_number.length - 4))
               $("#lblMyaacount").html('My Account : '+dashBoardData.account_number);
               $(".headerUserName").html('Welcome : ' +dashBoardData.first_name +" " +dashBoardData.last_name);
               $("#tagMemberRewards").html('Member : ' +dashBoardData.member_status +" Reward Points : " +dashBoardData.reward_points);
               $("#lblActibeBook").html(' #'+dashBoardData.booking_details.active_booking_number);
            
               $('#dateCheckIN').text(dashBoardData.booking_details.checkin_date);
               $('#dayCheckIN').text(dashBoardData.booking_details.checkin_day);
               $('#monthCheckIN').text(dashBoardData.booking_details.checkin_month);
               
               $('#dateCheckOUT').text(dashBoardData.booking_details.checkout_date);
               $('#dayCheckOUT').text(dashBoardData.booking_details.checkout_day);
               $('#monthCheckOUT').text(dashBoardData.booking_details.checkout_month);
              
            
               $("#week").html(' '+dashBoardData.booking_details.day);
               $("#month").html(' '+dashBoardData.booking_details.month); 
               $(".imgProfile").attr("src",dashBoardData.profile_pic);
               //$("#profileImg").attr("src",dashBoardData.profile_pic);
               $(".imgProfile").show();
               $("#loadingImg").hide();
               $("#spnCheckInTime").html('Check-in '+dashBoardData.booking_details.checkin_time);
               $("#spnCheckOutTime").html('Check-out '+dashBoardData.booking_details.checkout_time);
            
               $("#hotel_name").html(dashBoardData.booking_details.hotel_name);
               $("#hotel_city").html(dashBoardData.booking_details.hotel_city+","+dashBoardData.booking_details.hotel_state);
                
        });
//*************************API CALL*********************************** */

        $("#notificaton").click(function(){
          oj.Router.rootInstance.go('notification');
        });
          checkInStatus = localStorage.getItem("checkInStatus");
          if (checkInStatus == 'YES') {
            $("#chekin").hide();
            $("#chekout").show();
           
          }
          else {
            $("#chekin").show();
            $("#chekout").hide();
          }
       $('#offers').click(function(){
        oj.Router.rootInstance.go('offers');
       });
       
      });
    };
   
    self.handleBindingsApplied = function (info) {
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
    self.handleDetached = function (info) {
      // Implement if needed
    };
  }

  /*
   * Returns a constructor for the ViewModel so that the ViewModel is constructed
   * each time the view is displayed.  Return an instance of the ViewModel if
   * only one instance of the ViewModel is needed.
   */
  return new DashboardViewModel();
}
);


