Ext.onReady(function () {
    var store = Ext.create('Ext.data.JsonStore', {
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/listUsers',
            actionMethods: 'POST',
            reader:
                {
                    type: 'json'
                }
        },
        fields: ['id', 'username', 'age']
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
                {dataIndex: 'username', header: 'Name', flex: 3},
                {dataIndex: 'age', header: 'Age', width: 100},
            ],
        renderTo: 'users_panel',
        store: store
    });
});

