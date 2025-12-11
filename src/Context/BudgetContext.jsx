import { useContext, createContext, useState } from "react";


const BudgetContext = createContext()


function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false)
    
    //funzione per cambiare lo stato della variabile budgetmode 
    function changeBugetmode() {
        setBudgetMode(!budgetMode)
        
        
    }

    const contextValue = {
        changeBugetmode,
        budgetMode,
        setBudgetMode,
    }

    return (
        <BudgetContext.Provider value={contextValue}>
            {children}
        </BudgetContext.Provider>
    )
}


function useBudget() {
    const value = useContext(BudgetContext)
    return value;
}

export { BudgetProvider, useBudget }