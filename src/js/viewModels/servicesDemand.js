/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe'],
 function(oj, ko, $, app,mbe) {
  
    function DemandServiceViewModel() {
      var self = this;
      
      self.backBtn=function(){
        oj.Router.rootInstance.go('dashboard');
      }

     // $('#totalAmount1').text(dashBoardData.services.beer[0].price)
    
      self.nextBtn=function(){
        var selectedDemand="";
        if(selectedBath>0)
          selectedDemand="Bath Amenities ";
        $('.div1Sub1').each(function(){
          if($(this).data("select")=='yes')
            selectedDemand=selectedDemand+" , "+$(this).data("demand")
        });

        $.post("https://twilioapi-gse00001943.apaas.em2.oraclecloud.com/sendMsg",
        {
          "receiver" : "+918072645869",
          "message" : dashBoardData.first_name+" from room no-"+dashBoardData.booking_details.selected_room.room_no+" has been requested for "+selectedDemand +" Services"
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
        });
        $('#myModal').css('display', 'block');
         
       
      }
    
      self.handleActivated = function(info) {
        // Implement if needed
      };

      self.handleAttached = function(info) {
      
        $(document).ready(function () {
          $('#totalSelectedBathImg').hide();
          $('#ok').click(function(){
            $('#myModal').css('display', 'none');
            oj.Router.rootInstance.go('dashboard');
           });
          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $("#bathAmenities").click(function(){
            oj.Router.rootInstance.go('serviceBathAminities');
          });
         
          $('#totalSelected').html(selectedBath+' Selected');
          if(selectedBath>0){
            $('#totalSelectedBathImg').show();
          }
          
          //Checking the selected 
          $(".div1Sub1").click(function () {
            if($(this).data("select") == 'no'){
              $("#"+$(this).data("demand")+"").show();
              $(this).data("select", 'yes')
            }
            else{
              $("#"+$(this).data("demand")+"").hide();
              $(this).data("select", 'no')
            }
  
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
    return new DemandServiceViewModel();
  }
);
