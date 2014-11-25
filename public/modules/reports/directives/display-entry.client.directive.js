'use strict';

angular.module('reports').directive('displayEntry', ['$compile',
	function($compile) {
		return {
			template: '<dt>{{name}}</dt>' +
      '<dd>' +
      '  <div class="entry-value">' +
      '  </div>' +
      '</dd>',
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
        var name, value;
        function updateView() {
          var entry = element.find('.entry-value');
          console.log(entry);
          console.log(value);
          console.log(name);
          if (angular.isArray(value)) {
            var list = angular.element('<ul class="list-unstyled"></ul>');
            for (var item in value) {
              var item_html = angular.element('<li><pre>{{item}}</pre></li>');
              $compile(item_html)({item: item});
              list.append(item_html);
            }
            console.log('nodon4');
            entry.append(list);
          }
        }
        scope.$watch(attrs.displayEntryName, function(entry_name) {
          name = entry_name;
          if (value) {
            updateView();
          }
        });
        scope.$watch(attrs.displayEntryValue, function(entry_value) {
          value = entry_value;
          if (name) {
            updateView();
          }
        });
			}
		};
	}
]);
