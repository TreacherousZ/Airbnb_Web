import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo(() => {
    const names=["1111","2222","3333","4444","5555","6666","7777"]
    const [ selectIndex, setSelectIndex ] = useState(0)

    function toggleClickHandle(isNext=true){
        let newIndex = isNext? selectIndex+1 : selectIndex-1
        // 越界问题
        if (newIndex <0 ) newIndex = names.length -1
        if (newIndex >names.length -1) newIndex = 0
        setSelectIndex(newIndex)
        console.log(newIndex);
    }

  return (
    <DemoWrapper>
        <div className='control'>
            <button onClick={e => toggleClickHandle(false)}>上一个</button>
            <button onClick={e => toggleClickHandle(true)}>下一个</button>
        </div>

        <div className='list'>
                {/* 告知需要把谁传到中间位置，实时传递给indicator */}
            <Indicator selectIndex={selectIndex}>
                {
                    names.map(item =>{
                        return <button>{item}</button>
                    })
                }
            </Indicator>
        </div>
    </DemoWrapper>
  
  )
})

export default Demo