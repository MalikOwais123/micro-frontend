### step - 1 

## FIRST MONO LITHIC NAME = home
## command --> npx create-mf-app 
## host name = home
## port = 3000

`creating some header and footer components from home` 



## FIRST MONO LITHIC NAME = home
## command --> npx create-mf-app 
## host name = pdp (pdp stands for product details page)
## port = 3001

`now if you need to use footer and header component from home page to others app`
    STEP 1 `goto webpack config file`
    STEP 2 `then in exposes object add what are the compoennts you want to expose`
    STEP 3 `now restart the app that have some exposes`
    STEP 4 `now add remote url to the other app in our case is it pdp and restart the app also`
    STEP 4 `while adding name in remote address keep note name will be same as mentioned in other app config details`

    YOU ARE GOOD TO GO 👍🏼

    Stop here one thing when you are importing components from app make sure to use following path
        app/index
        
        in our case 
            `home/Header`

    `SEE ITS WORKING`

    Now use component just from other app just like from the same app


## Error handling (allows you to handle the error the with component)
    `and only effect the error component not the whole web`