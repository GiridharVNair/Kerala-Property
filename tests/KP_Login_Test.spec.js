import {expect, test} from '@playwright/test'
import { KP_LoginPage } from '../Pages/KP_Login_Page'
 /**@type {KP_LoginPage} */
let logn;
test.describe("login",async()=>
{


test.beforeEach("url loading", async({page})=>
{
    await page.goto(process.env.BASEURL);
    logn=new KP_LoginPage(page);
})

test("validlogin",async({page})=>
{
    await logn.setvalues(process.env.KP_USERNAME,process.env.KP_PASSWORD);
    await logn.loginclick();
    await expect(page).toHaveURL("https://keralaproperty.in/member/myhome/");
})


test("invalidlogin",async({page})=>
{
    await logn.setvalues("a@gmail.com","abc@123");
    await logn.loginclick();
    await expect(logn.errormsg).toBeVisible();
    await expect(page).toHaveURL("https://keralaproperty.in/member/login/");
})

})