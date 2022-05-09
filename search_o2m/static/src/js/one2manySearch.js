odoo.define('search_o2m.search_bar_one2many', function (require) {
    "use strict";

    const FieldOne2Many = require('web.relational_fields').FieldOne2Many;

    const SearchFieldOne2Many = FieldOne2Many.include({

        events: _.extend({}, FieldOne2Many.prototype.events, {
            'keyup .oe_search_input': '_onKeyUp'
        }),
        init: function (parent, name, record, options) {
            this._super(...arguments);
            this.widget_O2M =  this.attrs.options.widget_O2m;
        },
        start: function () {
            if (this.view.arch.tag === 'tree') {
                if (this.widget_O2M) {
                    const search = '<input type="text" class="oe_search_input mt-2 ml-5 pl-5" placeholder="Search..." >';
                    const $search = $(search).css('border', '1px solid #ccc').css('width', '50%').css('border-radius', '10px').css('margin-top', '-32px').css('height', '30px')
                    this.$el.prepend($search);
                }
            }
            return this._super(this, arguments);
        },
        _onKeyUp: function (event) {
            var filter, tr, i;
            filter = $(event.currentTarget).val().toLowerCase()
            tr = $(".o_list_table tr:not(:first)")
            for (i = 0; i < tr.length - 1; i++) {
                tr[i].style.display = "none";
                const tdArray = tr[i].getElementsByTagName("td");
                for (var j = 0; j < tdArray.length; j++) {
                    const cellValue = tdArray[j];
                    if (cellValue && cellValue.innerText.toLowerCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                        break;
                    }

                }
            }
            for (i = 0; i < tr.length - 1; i++) {
                const tdArray = tr[i].getElementsByTagName("td");
                for (var j = 0; j < tdArray.length; j++) {
                    const cellValue = tdArray[j];

                    if (cellValue && cellValue.innerText.toLowerCase().indexOf(filter) > -1) {
                        var innerHTML = cellValue.innerText;
                        var innerHTML2 = cellValue.innerText.toLowerCase();
                      var index = innerHTML2.indexOf(filter)

                    console.log('index',index)
                      if (index >= 0) {
                      var innerVal = innerHTML.substring(0,index) + "<span style='background-color: yellow'>" + innerHTML.substring(index,index+filter.length) + "</span>" + innerHTML.substring(index + filter.length);
                      cellValue.innerHTML = innerVal;
                      }

                    }

                }
            }
        },
    });

    return SearchFieldOne2Many;
});
