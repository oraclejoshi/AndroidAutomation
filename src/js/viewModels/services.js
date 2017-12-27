/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'appController','mbe'],
 function(oj, ko, $, app,mbe) {
  
    function ServicesViewModel() {
      var self = this;
      
      self.backBtn=function(){
        oj.Router.rootInstance.go('roomSelect');
      }

      $('#totalAmount1').text(dashBoardData.services.beer[0].price)
      
      self.nextBtn=function(){
        $(document).ready(function () {

          dashBoardData.services.beer[0].name= "beer";
          dashBoardData.services.beer[0].price= $('#totalAmount1').text();
          dashBoardData.services.beer[0].count= $('#totalSelected').text();
          
        });
        localStorage.setItem("checkInStatus", "YES");
        $("#nextBtn").hide();
        $('#wait').show();
          mbe.invokeCustomAPI("CFICustomAPI/updateUserData","POST",dashBoardData).then(function(response){
          
            console.log(response.data);
            oj.Router.rootInstance.go('finishCheckin');
          });
       
      }
    
      self.handleActivated = function(info) {
        // Implement if needed
      };

      self.handleAttached = function(info) {
        // Implement if needed
        //serviceRecomendation
       
        $('#totalSelectedImg').hide();
        $('#otherRequestImg').hide();
        $(document).ready(function () {
          $('#wait').hide();
          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $('#totalAmount1').html('$ '+total);
          $('#totalSelected').html(selected+' Selected');
          if(selected>0){
            $('#totalSelectedImg').show();
          }
          
          if(otherRequest!='')
            $('#otherRequestImg').show();
          $(".serviceImg").click(function () {
            oj.Router.rootInstance.go('serviceRecomendation');
          });
          $("#otherServices").click(function(){
            oj.Router.rootInstance.go('servicesOthers');
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
    return new ServicesViewModel();
  }
);
