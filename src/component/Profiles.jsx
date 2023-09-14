const Profiles = (props)=>{
    return (<>
        <div className="flex flex-col  h-[300px] w-[200px] mt-20 ">
            <div className="h-[100px] w-[100px] block mx-auto rounded-full bg-slate-400"><img className="rounded-full h-[100px] w-[100px]" src={props.imgsrc} alt="" /></div>
            <p className="text-white my-4 text-3xl">{props.name}</p>
            <p className="text-white my-3 text-2xl">{props.work}</p>
            <p className="text-white my-2 text-1xl">{props.exp}</p>
        </div>
    </>)
}

export default Profiles ;

