import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Intishar', lastName: 'Rafi', email: 'intishar1990@gmail.com'}
  return (
    <section className='home'>

      <div className='home-content'>
        <header className='home-header'>

          <HeaderBox type="greeting"
           title="Welcome" 
           user={loggedIn?.firstName || 'Guest'} 
           subtext="Access and manage your account and transaction efficiently."></HeaderBox>

           <TotalBalanceBox 
           accounts={[]} 
           totalBanks={1} 
           totalCurrentBalance={1250.35}></TotalBalanceBox>

        </header>

        RECENT TRANSACTION

      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.50},{currentBalance:123.50}]}

      />


    
    </section>
  )
}

export default Home