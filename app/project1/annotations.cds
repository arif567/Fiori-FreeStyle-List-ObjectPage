using MyService as service from '../../srv/service';
using from '../../srv/service';
using from '../../db/script';

annotate service.Student with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Value : batch,
        },
    ]
);

