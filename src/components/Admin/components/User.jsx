import React from 'react'

const User = () => {
  return (
    <div className="container bootstrap snippets bootdey pt-5 pb-5">
    <div className="card-body inf-content">
        <div className="row">
            <div className="col-md-4">
                <img alt="" style={{width:`600px`}} title="" className="rounded-circle img-thumbnail isTooltip" src="https://bootdey.com/img/Content/avatar/avatar7.png" data-original-title="Usuario" /> 
            </div>
            <div className="col-md-6">
                <strong>Information</strong><br/>
                <div className="table-responsive">
                <table className="table table-user-information">
                    <tbody>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                    Username                                               
                                </strong>
                            </td>
                            <td className="text-primary">
                                tuandung     
                            </td>
                        </tr>
                        <tr>    
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-user  text-primary"></span>    
                                    Email                                              
                                </strong>
                            </td>
                            <td className="text-primary">
                                tuandung@gmail.com  
                            </td>
                        </tr>
                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                    Point                                               
                                </strong>
                            </td>
                            <td className="text-primary">
                                1500
                            </td>
                        </tr>

                        <tr>        
                            <td>
                                <strong>
                                    <span className="glyphicon glyphicon-bookmark text-primary"></span> 
                                    Class                                               
                                </strong>
                            </td>
                            <td className="text-primary">
                                A
                            </td>
                        </tr>               
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  </div>                                        
  )
};

export default User;