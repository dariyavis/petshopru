Ext.onReady(function () {

    Ext.define('User', {
        extend: 'Ext.data.Model',
        serverSideId: false,
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name',  type: 'string'},
            {name: 'surname', type: 'string'},
            {name: 'age',  type: 'int'}
        ],
        proxy: {
            type: 'rest',
            url: '/users'
        },
        resetId: function() {
            this.set('id', null);
        }
    });

    var store = Ext.create('Ext.data.Store', {
        model: 'User',
        autoLoad: true
    });

    Ext.create('Ext.grid.Panel', {
        id: "gridUsers",
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        columns:
            [
                {dataIndex: 'id', header: 'ID', hidden: true},
                {
                    dataIndex: 'name',
                    header: 'Name',
                    flex: 1
                },
                {
                    dataIndex: 'surname',
                    header: 'Surname',
                    flex: 1
                },
                {
                    dataIndex: 'age',
                    header: 'Age',
                    width: 100
                },
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    items: [{
                        icon: '../resources/delete_icon.png',
                        tooltip: 'Delete',
                        handler: function (grid, rowIndex, colIndex) {
                            var rec = grid.getStore().getAt(rowIndex);
                            var user = Ext.create(User, rec.getData());
                            user.erase();
                            grid.store.remove(rec);
                        }
                    }]
                }
            ],
        renderTo: 'users_panel',
        store: store
    });

    Ext.create('Ext.Button', {
        renderTo: 'add_button',
        iconCls: 'add_button_cls',
        scale: 'large',
        handler: function () {
            var winForm = Ext.create('Ext.window.Window', {
                title: 'Add new user',
                height: 200,
                width: 400,
                layout: 'fit',
                items: [{
                    id: 'add-user-win',
                    // title: 'Enter new user',
                    width: 740,
                    height: 480,
                    iconCls: 'icon-grid',
                    animCollapse: false,
                    constrainHeader: true,
                    xtype: 'form',
                    bodyPadding: 15,
                    header: false,
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        name: 'name',
                        allowBlank: false
                    },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Surname',
                            name: 'surname',
                            allowBlank: false
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            name: 'age',
                            fieldLabel: 'Age',
                            maxValue: 150,
                            minValue: 0
                        }],
                    buttons: [{
                        text: 'Add',
                        handler: function () {
                            var form = this.up('form').getForm();
                            if (form.isValid()) {
                                var user = Ext.create(User, form.getValues());
                                user.resetId();
                                user.save();
                                winForm.destroy();
                                Ext.ComponentQuery.query('grid[id=gridUsers]')[0].store.load();
                            } else {
                                Ext.Msg.alert("Error!", "Your form is invalid!");
                            }
                        }
                    }]
                }]
            }).show();
        }
    });
});

