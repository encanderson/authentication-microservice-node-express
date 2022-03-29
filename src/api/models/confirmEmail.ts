import { config } from "../../config";

export const htmlCode = (token: string, path: string): string => {
  const link = `${config.url}/${path}/${token}`;

  return `
        <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ecf0f1;color: #000000;line-height: inherit;">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;margin: 0 auto;background-color: #ecf0f1;width: 100%;line-height: inherit;color: #000000;" cellpadding="0" cellspacing="0">
          <tbody style="line-height: inherit;">
            <tr style="vertical-align: top;line-height: inherit;border-collapse: collapse;">
              <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;line-height: inherit;color: #000000;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->

                <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #bedbf9;line-height: inherit;width: calc(100% - 40px) !important;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #bedbf9;"><![endif]-->

                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                        <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                            <!--<![endif]-->
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>

                <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;line-height: inherit;width: calc(100% - 40px) !important;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                        <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                            <!--<![endif]-->

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 10px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;">
                                      <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                        <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="center">

                                          <img align="center" border="0" src="https://i.ibb.co/JR39Gnj/illustration-2.png" alt="Hero Image" title="Hero Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 562px;line-height: inherit;" width="562" class="v-src-width v-src-max-width">

                                        </td>
                                      </tr>
                                    </table>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>

                <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;" align="justify">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f0f7ff;line-height: inherit;width: calc(100% - 40px) !important;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f0f7ff;"><![endif]-->

                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                        <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                            <!--<![endif]-->

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 20px 10px 5px 20px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <h1 class="v-text-align" style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-weight: normal; font-family: 'Open Sans',sans-serif; font-size: 19px;">
                                      Olá,
                                    </h1>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 10px 10px 10px 20px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="justify">

                                    <div class="v-text-align" style="color: #6b6b6b; line-height: 140%; text-align: left; word-wrap: break-word;">
                                      <p align="justify" style="font-size: 14px;line-height: 140%;margin: 0;">
                                        <span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">Estamos muito animados por receber você em nossa comunidade,<strong style="line-height: inherit;">
                                            OriEdu.</strong></span></p>
                                    </div>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 0px 10px 10px 20px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="justify">

                                    <div class="v-text-align" style="color: #6b6b6b; line-height: 140%; text-align: left; word-wrap: break-word;">
                                      <p align="justify" style="font-size: 14px;line-height: 140%;margin: 0;">
                                        <em style="line-height: inherit;">
                                          <span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">Uma comunidade de todos pela educação.</span></em>
                                      </p>
                                    </div>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                            <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                            <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                              <div style="width: 100% !important;">
                                <!--[if (!mso)&(!IE)]><!-->
                                <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                  <!--<![endif]-->

                                  <!--[if (!mso)&(!IE)]><!-->
                                </div>
                                <!--<![endif]-->
                              </div>
                            </div>
                            <!--[if (mso)|(IE)]></td><![endif]-->
                            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                          </div>
                        </div>
                      </div>

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 10px 10px 30px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <div class="v-text-align" align="center" style="line-height: inherit;">
                                      <button type="submit" target="_blank" style="box-sizing: border-box;display: inline-block;font-family: arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF;background-color: #8fb8ed;border-radius: 4px;-webkit-border-radius: 4px;-moz-border-radius: 4px;width: auto;max-width: 100%;overflow-wrap: break-word;word-break: break-word;word-wrap: break-word;mso-border-alt: none;line-height: inherit;">
                                        <span style="display:block;padding:10px 50px;line-height:120%;"><span style="font-size: 14px; line-height: 16.8px;"><a href=${link} >Confirmar</a></span></span>
                                      </button>
                                    </div>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #f0f7ff;line-height: inherit;width: calc(100% - 40px) !important;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f0f7ff;"><![endif]-->

                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                        <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                            <!--<![endif]-->

                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
                <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #182f3e;line-height: inherit;width: calc(100% - 40px) !important;">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #182f3e;"><![endif]-->

                      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                        <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                          <!--[if (!mso)&(!IE)]><!-->
                          <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                            <!--<![endif]-->

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 30px 10px 10px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <h1 class="v-text-align" style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: trebuchet ms,geneva; font-size: 22px;">
                                      OriSistem
                                    </h1>

                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 0px 10px 10px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <div class="v-text-align" style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <a href="https://orisistem.com.br" target="_blank" style="font-size: 14px;line-height: 140%;color: #0000ee;text-decoration: underline;">
                                        <span style="font-family: 'comic sans ms', sans-serif; font-size: 18px; line-height: 25.2px;">www.orisistem.com.br</span></a>
                                    </div>

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                              <tbody style="line-height: inherit;">
                                <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                  <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 10px 10px 15px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                    <div class="v-text-align" style="color: #ecf0f1; line-height: 140%; text-align: center; word-wrap: break-word;">
                                      <a href="https://orisistem.com.br/politica-de-privacidade" target="_blank" style="font-size: 14px;line-height: 140%;color: #0000ee;text-decoration: underline;">Política de Privacidade</a><br style="line-height: inherit;">
                                      <a href="https://orisistem.com.br/termos-de-uso" target="_blank" style="font-size: 14px;line-height: 140%;color: #0000ee;text-decoration: underline;">Termos de Uso<span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;"></span></a>
                                        <p style="font-size: 14px;line-height: 140%;margin: 0;">&nbsp;</p>
                                        <a href="https://orisistem.com.br" target="_blank" style="font-size: 14px;line-height: 140%;color: #0000ee;text-decoration: underline;">&copy; OriSistem</a>
                                      </div>

                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                              <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="u-row-container" style="padding: 0px;background-color: transparent;line-height: inherit;">
                    <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;line-height: inherit;width: calc(100% - 40px) !important;">
                      <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;line-height: inherit;">
                        <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;line-height: inherit;width: 600px !important;">
                          <div style="width: 100% !important;line-height: inherit;margin: 0 auto;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;line-height: inherit;">
                              <!--<![endif]-->

                              <table style="font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                                <tbody style="line-height: inherit;">
                                  <tr style="line-height: inherit;vertical-align: top;border-collapse: collapse;">
                                    <td class="v-container-padding-padding" style="overflow-wrap: break-word;word-break: break-word;padding: 10px;font-family: arial,helvetica,sans-serif;line-height: inherit;color: #000000;vertical-align: top;border-collapse: collapse;" align="left">

                                      <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;line-height: inherit;color: #000000;">
                                        <tbody style="line-height: inherit;">
                                          <tr style="vertical-align: top;line-height: inherit;border-collapse: collapse;">
                                            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #000000;">
                                              <span style="line-height: inherit;">&#160;</span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>

                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </body>`;
};
