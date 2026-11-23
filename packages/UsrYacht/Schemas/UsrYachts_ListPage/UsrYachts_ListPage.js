define("UsrYachts_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachts"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 154
						},
						{
							"id": "a8d451df-2c16-81e7-86f2-9cae4703934e",
							"code": "PDS_UsrStatus",
							"caption": "#ResourceString(PDS_UsrStatus)#",
							"dataValueType": 10,
							"width": 117
						},
						{
							"id": "1d54f7c3-da2d-2cd7-0a29-77d90514cb1c",
							"code": "PDS_UsrPrice",
							"caption": "#ResourceString(PDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 180
						},
						{
							"id": "1e12b3b5-3ed3-4f2a-a4ac-bd7f52f3748a",
							"code": "PDS_UsrManager",
							"caption": "#ResourceString(PDS_UsrManager)#",
							"dataValueType": 10,
							"width": 145
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": true,
							"resizing": true,
							"sorting": true,
							"adding": false
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrYachts",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrStatus": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrPrice": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						}
					},
					"PDS_UsrManager": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrYachts",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrStatus": {
							"path": "UsrStatus"
						},
						"UsrPrice": {
							"path": "UsrPrice"
						},
						"UsrManager": {
							"path": "UsrManager"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});