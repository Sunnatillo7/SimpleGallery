import React, {useState} from 'react'

function ImageSearch({funcSearchText}) {

    const [text, setText] = useState('')


    const handleSubmit =(e)=>{
       e.preventDefault()


       funcSearchText(text)
    }
  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
       <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex item-center border-b border-b-2 border-teal-500 py-2">
            <input 
             onChange={(e)=> setText(e.target.value)}
            type="text" 
            className="appearance-none bg-transparent border-none w-full
             text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              placeholder='Search image term...' />
               <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white
               py-1 px-2 rounded' type='submit'> 
                Search
               </button>
        </div>
       </form>
    </div>
  )
}

export default ImageSearch
