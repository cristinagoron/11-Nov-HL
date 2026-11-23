define("UsrYachts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "ed23bcd5-3323-49cd-935a-bdf366e5bd6e",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_Actions",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Actions_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_a7khyxv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_a7khyxv_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrYachtAverageTicketPrice",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "YachtId"
						}
					}
				},
				"parentName": "Button_Actions",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_hh6ypcb",
					"control": "$PDS_UsrPrice_hh6ypcb",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Image",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ImageInput",
					"label": "$Resources.Strings.PDS_UsrImage_1e8tpzc",
					"value": "$PDS_UsrImage_1e8tpzc",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"size": "large",
					"borderRadius": "medium",
					"positioning": "cover"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "YachtNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrYachtNumber_6qgq9zr",
					"control": "$PDS_UsrYachtNumber_6qgq9zr",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_kp3nhty",
					"control": "$PDS_UsrTicketPrice_kp3nhty",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CaptainEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(CaptainEmail_label)#",
					"control": "$PDS_UsrCaptainEmail_aqvgudy",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(CaptainEmail_caption)#",
					"visible": true,
					"readonly": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_5qh6yz6",
					"control": "$PDS_UsrLength_5qh6yz6",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_an52fst",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_an52fst",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_e5e7a2c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e5e7a2c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Captain",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_41ea7ru",
					"control": "$PDS_UsrCrewCount_41ea7ru",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_pszjjco",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_pszjjco",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": "$DriveType_ValueDetails"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengerCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengerCount_k94qoyr",
					"control": "$PDS_UsrPassengerCount_k94qoyr",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_8dg7288",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_8dg7288",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": "$Status_ValueDetails",
					"secondaryDisplayValue": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_991xf3t",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_991xf3t_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Status",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_fb2qzbh",
					"control": "$PDS_UsrComment_fb2qzbh",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_u5onkf7",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_u5onkf7",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Categories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(Categories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_5qh6yz6": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMaxLength",
									"message": "#ResourceString(LengthMustBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPrice_hh6ypcb": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.YTValidator",
								"params": {
									"settingCode": "UsrYachtMaxPrice",
									"message": "#ResourceString(PriceMustBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_an52fst": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_an52fst_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCrewCount_41ea7ru": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengerCount_k94qoyr": {
						"modelConfig": {
							"path": "PDS.UsrPassengerCount"
						}
					},
					"PDS_UsrDriveType_pszjjco": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_pszjjco_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_8dg7288": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_8dg7288_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_u5onkf7": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_u5onkf7_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_fb2qzbh": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrImage_1e8tpzc": {
						"modelConfig": {
							"path": "PDS.UsrImage"
						}
					},
					"DriveType_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrDriveTypeDescription"
						}
					},
					"Status_ValueDetails": {
						"modelConfig": {
							"path": "PDS.UsrStatusDescription"
						}
					},
					"PDS_UsrYachtNumber_6qgq9zr": {
						"modelConfig": {
							"path": "PDS.UsrYachtNumber"
						}
					},
					"Categories_List_Items_Predefined_Filter": {
						"value": null
					},
					"PDS_UsrTicketPrice_kp3nhty": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrCaptainEmail_aqvgudy": {
						"modelConfig": {
							"path": "PDS.UsrCaptainEmail_aqvgudy"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrDriveTypeDescription": {
									"path": "UsrDriveType.Description",
									"type": "ForwardReference"
								},
								"UsrStatusDescription": {
									"path": "UsrStatus.Description",
									"type": "ForwardReference"
								},
								"UsrCaptainEmail_aqvgudy": {
									"path": "UsrCaptain.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[

			{
                request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Button works...");
                    Terrasoft.showInformation("My button was pressed.");
                    var price = await request.$context.PDS_UsrPrice_hh6ypcb;
                    console.log("Price = " + price);
                    request.$context.PDS_UsrComment_fb2qzbh = "comment from JS code!";
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            },
			
			{
                request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {
                     if (request.attributeName === 'PDS_UsrPrice_hh6ypcb' ||                 // if price changed
                       request.attributeName === 'PDS_UsrPassengerCount_k94qoyr' ) {         // or Passenger count changed
                        let price = await request.$context.PDS_UsrPrice_hh6ypcb;
                        let passengers = await request.$context.PDS_UsrPassengerCount_k94qoyr;
                        let ticket_price = price / passengers;
                        request.$context.PDS_UsrTicketPrice_kp3nhty = ticket_price;
                    }
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            }
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			 "usr.YTValidator": {
                validator: function (config) {
                    return async function (control) {
                        let value = control.value;
                        let setting = await new sdk.SysSettingsService().getByCode(config.settingCode);
                        let maxValue = setting.value;
                        let valueIsCorrect = value <= maxValue;
                        var result;
                        if (valueIsCorrect) {
                            result = null;
                        } else {
                            result = {
                                "usr.YTValidator": {
                                    message: config.message
                                }
                            };
                        }
                        return result;
                    };
                },
                params: [
                    {
                        name: "settingCode"
                    },
                    {
                        name: "message"
                    }
                ],
                async: true
            }
		}/**SCHEMA_VALIDATORS*/
	};
});