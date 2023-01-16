import Head from '../pages/Head'
import Link from 'next/link'

const adminpage = () => {
    return (
        <div className='container'>
        <Head/>
          <img
               className="rounded mx-auto d-block p-3 mt-5"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                 alt="Workflow" width="100"/>
                  <h2 className="mb-2 text-center font-extrabold text-gray-900">Sign in to your Admin Verify Code</h2>
                  <form className='form-inline w-50 mx-auto'>
                        <label/>
                            <div className="form-group">
                               <input id="password" name="password" type="password" placeholder="Admin Code"  className="form-control col-sm-10" 
                                 aria-label="Large"></input>
                                 </div>
     
                <a href='/Home' className="btn btn-primary btn-lg btn-block w-100 mt-3">Sign in</a>
        
          </form>
          
          </div>
     );
}
 
export default adminpage;