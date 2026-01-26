import { test, expect } from '@playwright/test';

test.describe('Automatización en Testertestarudo', () => {

    // Test Navegación principal - Login - testertestarudo
    test('Los links principales redirigen correctamente', async ({ page }) => {
        await test.step('Estando yo en la web principal https://testertestarudo.com/', async () => {
            await page.goto('https://testertestarudo.com/');
        });

        await test.step('Cuando hago click en "Academia - Micuenta"', async () => {
        // 1. Localizar el elemento que despliega el menú (Academia)
        const menuAcademia = page.getByText('Academia', { exact: true });
        // 2. Hacer HOVER (pasar el ratón por encima)
        await menuAcademia.hover();
        await page.getByRole('link', { name: 'Mi Cuenta' }).click();
        });

        await test.step('Soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(/.*dashboard\/profile\//);  
        });
        await test.step('Y ingreso usuario"', async () => {
        //await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('frank.pcv@gmail.com');
        // Se cambio .fill por .pressSequentially para activar los validadores
        await page.getByRole('textbox', { name: 'Username or Email Address' }).pressSequentially('test.prueba.software.calidad@gmail.com', { delay: 100 });        });
        
        await test.step('Y ingreso contraseña"', async () => {
        await page.getByRole('textbox', { name: 'Password' }).pressSequentially('12345678', { delay: 100 });
        });
        
        await test.step('Y presiono clic en boton Log In"', async () => {
        await page.getByRole('button', { name: 'Log In' }).click({ force: true });
        });

        await test.step('Entonces soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(url => url.toString().includes('/dashboard/'));
        });

    });

});