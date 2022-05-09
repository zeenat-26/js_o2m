#-*- coding:utf-8 -*-
{
    'name': "Quick Search in one2many",
    'version': '14.0.1.0.0',
    'description': "Quick Search in one2many field",
    'summary': 'This module helps to search records easily in one2many field.',
    'author': 'Bista Solutions',
    'category': 'Web',
    'depends': ['web', 'account','sale'],
    'data': [
        'views/assets.xml',
        'views/sale_order_line.xml',
    ],
    'installable': True,
}
