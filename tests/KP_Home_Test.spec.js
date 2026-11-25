import {expect, test} from '@playwright/test'
import { KP_Home_Page } from '../Pages/KP_Home_Page'
import { KP_LoginPage } from '../Pages/KP_Login_Page'

 /**@type {KP_LoginPage} */
 let login;
  /**@type {KP_Home_Page} */
  let home;
  test.describe("Home Page",async()=>
{
test.beforeEach("url loading",async({page})=>
{
    await page.goto(proccess.env.BASEURL);
    login=new KP_LoginPage(page);
     await login.setvalues(process.env.KP_USERNAME,process.env.KP_PASSWORD);
        await login.loginclick();
        await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
        home=new KP_Home_Page(page);
        })

    test('verify logo',async()=>
    {
        await expect(home.logo).toBeVisible();
        await expect(home.myhome).toHaveText("My Home");
    })

  
    test('verify name',async()=>
    {
        await expect(home.checkname).toHaveText("abc");
    })

    test('click my account',async()=>
    {
        await home.myaccntclick();
        await expect(home.checkmyprop).toHaveText("My Property");

    })

})

