/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'appController','ojs/ojbutton'],
 function(oj, ko, $, app) {
  
    function serviceBathAminitiesViewModel() {
      var self = this;
      
      self.backBtn=function(){
        oj.Router.rootInstance.go('servicesDemand');
      }
      self.nextBtn=function(){
        selectedBath=0;totalBath=0;
        totalBath=Number($('#priceoption1').html())+Number($('#priceoption2').html())+Number($('#priceoption3').html())+Number($('#priceoption4').html())+Number($('#priceoption5').html());
         if($('#priceoption1').html()!=0)
          ++selectedBath;
          if($('#priceoption2').html()!=0)
          ++selectedBath;
          if($('#priceoption3').html()!=0)
          ++selectedBath;
          if($('#priceoption4').html()!=0)
          ++selectedBath;
          if($('#priceoption5').html()!=0)
          ++selectedBath;
          
         oj.Router.rootInstance.go('servicesDemand');
      }

      self.handleActivated = function(info) {
        // Implement if needed
      };

    
      self.handleAttached = function(info) {
        $(document).ready(function () {
          $("#notificaton").click(function(){
            oj.Router.rootInstance.go('notification');
          });
          $('.adds').click(function add() {
            var id=$(this).data("id")
            var a = $('#'+id).val();
             a++;
            $("#subs"+id).prop("disabled", !a);
            $('#'+id).val(a);
            var price=Number($(this).data("price"))*a;
            $('#price'+id).html(price)
        });
        //$(".subs").prop("disabled", !$("#noOfRoom").val());
        
        $('.subs').click(function subst() {
          var id=$(this).data("id")
          var a = $('#'+id).val();
            if (a >= 1) {
                a--;
                $('#'+id).val(a);
                var price=Number($(this).data("price"))*a;
                $('#price'+id).html(price);
            }
            else {
                $("#subs"+id).prop("disabled", true);
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
    return new serviceBathAminitiesViewModel();
  }
);
