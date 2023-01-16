import Head from '../pages/Head'


export default function Home() {
  
  return (
        <div className='container'>
          <Head/>
            <img
                 className="rounded mx-auto d-block p-3 mt-5"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                   alt="Workflow" width="100"/>
                    <h2 className="mb-5 text-center font-extrabold text-gray-900">Sign in to your account</h2>
        
                    <form className='form-inline w-50 mx-auto'>
                      <div className="form-group align-items-center">
                        <input id="email-address" name="email" type="email" placeholder="Email address"  className="form-control " 
                          aria-label="Large"></input>
                          </div>
                          <label/>
                              <div className="form-group">
                                 <input id="password" name="password" type="password" placeholder="Password"  className="form-control col-sm-10" 
                                   aria-label="Large"></input>
                                   </div>
    
             <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label">
                  Check me out
                  </label>
                </div>
                <a href="#!" >Forgot your password?</a>
              </div>
                  <a href='/Home' className="btn btn-primary btn-lg btn-block w-100 mt-3">Sign in</a>         
            </form>
            
            </div>
           )
}