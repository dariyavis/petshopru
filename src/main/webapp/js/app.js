Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        proxy: {
            type: 'ajax',
            url: '/listUsers',
            actionMethods: 'POST',
            reader:
                {
                    type: 'json'
                }
        },
        fields: ['id', 'name', 'surname', 'age']
    });
    store.load();
    Ext.create('Ext.grid.Panel', {
        // width: 410,
        // style: 'margin-top: 20px; margin-left: 40%',
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        columns:
            [
                {dataIndex: 'id', header: 'ID', hidden: true},
                {dataIndex: 'name', header: 'Name', flex: 1},
                {dataIndex: 'surname', header: 'Surname', flex: 1},
                {dataIndex: 'age', header: 'Age', width: 100},
                {
                    xtype:'actioncolumn',
                    width:30,
                    items: [{
                        icon: '../resouses/delete_icon.png',
                        tooltip: 'Delete',
                        handler: function(grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            // alert("Terminate " + rec.get('id'));
                            Ext.Ajax.request({
                                url: '/deleteUser',
                                method: 'POST',
                                params: {
                                    "id" : rec.get('id')
                                },
                                // success: function(response, opts) {
                                //     var obj = Ext.decode(response.responseText);
                                //     console.dir(obj);
                                // },
                                //
                                // failure: function(response, opts) {
                                //     console.log('server-side failure with status code ' + response.status);
                                // }
                                success: function(response, opts) {
                                    grid.store.remove(rec);
                                }

                            });
                        }
                    }]
                }
            ],
        renderTo: 'users_panel',
        store: store
    });
});

