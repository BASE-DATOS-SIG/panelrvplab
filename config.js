// ==============================================================
// ========== CONFIGURACIÓN DE SERVICIOS (OCULTA) ==========
// ==============================================================
// ⚠️ ESTE ARCHIVO DEBE ESTAR EN .gitignore

const CONFIG = {
    CLOUDINARY: {
        cloudName: 'z11uufz3',
        uploadPreset: 'lab_uploads',
        folderBase: 'SIG_LABORATORIO'
    },
    DRIVE: {
        clientId: '549801807409-b3f34iagtn0br4q58s5439hlqnhtt518.apps.googleusercontent.com',
        clientSecret: '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',
        scope: 'https://www.googleapis.com/auth/drive.file',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
    },
    TEST_USER: 'sigredvitalpaipa@gmail.com'
};