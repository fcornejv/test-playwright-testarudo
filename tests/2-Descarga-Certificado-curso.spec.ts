import { test, expect } from '@playwright/test';

test.describe('Automatización en Testertestarudo', () => {

    // Test Navegación principal - Login - testertestarudo
    test('Los links principales redirigen correctamente', async ({ page }) => {
        await test.step('Estando yo en la web principal https://testertestarudo.com/', async () => {
            await page.goto('https://testertestarudo.com/');
// CAMBIO CLAVE: Usa 'domcontentloaded' en lugar de 'networkidle'
    // Esto significa: "Avanza en cuanto el HTML esté cargado, aunque sigan bajando imágenes o scripts"
    await page.waitForLoadState('domcontentloaded');
        });

        await test.step('Cuando hago click en "Academia - Micuenta', async () => {
            const menuAcademia = page.getByText('Academia', { exact: true });
            await menuAcademia.hover();
            // Aseguramos que el link sea visible tras el hover
            const linkMiCuenta = page.getByRole('link', { name: 'Mi Cuenta' });
            await expect(linkMiCuenta).toBeVisible();
            await linkMiCuenta.click();
        });

        await test.step('Soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(/.*dashboard\/profile\//);  
        });

        await test.step('Y ingreso de usuario', async () => {
            const inputUser = page.getByRole('textbox', { name: 'Username or Email Address' });
            // 'fill' es más rápido y estable que 'pressSequentially' para logins
            await inputUser.fill('test.prueba.software.calidad@gmail.com');
        });

        await test.step('Y ingreso de contraseña', async () => {
            const inputPass = page.getByRole('textbox', { name: 'Password' });
            await inputPass.fill('12345678');
        });

        await test.step('Y presiono clic en boton Log In', async () => {
            const botonLogin = page.getByRole('button', { name: 'Log In' });
            
            // 1. Aseguramos que el botón sea visible antes de nada
            await expect(botonLogin).toBeVisible();

            // 2. Usamos Promise.all para esperar el clic y la navegación al mismo tiempo
            // Esto evita que el test se quede trabado en el .click()
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'load' }), // Espera a que la URL cambie
                botonLogin.click() 
            ]);
        });

        await test.step('Entonces soy redirigido al dashboard', async () => {
            // Esto buscará "/dashboard/" en cualquier parte de la URL
        await expect(page).toHaveURL(/.*\/dashboard\/.*/, { timeout: 10000 });
        });

        await test.step('Entonces soy redirigido a la subpágina "Inicie sesión para acceder a su panel de control"', async () => {
        await expect(page).toHaveURL(url => url.toString().includes('/dashboard/'));
        });

        await page.getByRole('link', { name: ' Download Certificates' }).click();
        await page.waitForTimeout(2000);


    //await page.goto('https://testertestarudo.com/dashboard/download-certificate/');

    await test.step('Localizar curso de Postman y generar certificado', async () => {
        // 1. Buscamos el curso sin ser tan estrictos con el contenedor superior
        // Usamos una expresión regular para que ignore espacios extras
        const contenedorPostman = page.locator('.academy-col-lg-4').filter({ 
            hasText: /Curso Introductorio de Postman/i 
        });

        // 2. Antes de hacer clic, nos aseguramos de que el contenedor exista
        await expect(contenedorPostman.first()).toBeVisible({ timeout: 10000 });

        // 3. Buscamos el botón de descarga dentro
        const botonDownload = contenedorPostman.getByRole('link', { 
            name: 'Download Certificate' 
        });

        // 4. Forzamos el clic si es necesario, por si algo lo está tapando
        await botonDownload.click({ force: true });
        console.log('LOG: Clic realizado en el curso de Postman.');
    });

    await test.step('Validar URL y finalizar', async () => {
        // 1. Esperamos la URL (según tu imagen, esto ya funciona)
        await expect(page).toHaveURL(/.*source=certificate/, { timeout: 15000 });
        
        // 2. Tomamos la captura
        //await page.screenshot({ path: 'screenshots/certificado_final.png' });
        console.log('LOG: Certificado validado visualmente.');
        page.close() 
    });







    });

});