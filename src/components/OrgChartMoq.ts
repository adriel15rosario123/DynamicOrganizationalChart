import OrgDto from "./OrgDto";

export const orgData:OrgDto[] = [
    {
        id:1,
        rol:'Presidente',
        circleStyled:'DashedLarimar',
        fatherId:null
    },
    {
        id:2,
        rol:'Gerente 1',
        circleStyled:'DashedLarimar',
        fatherId:1
    },
    {
        id:3,
        rol:'Gerente 2',
        circleStyled:'SolidBlue',
        fatherId:1
    },
    {
        id:9,
        rol:'Gerente 3',
        circleStyled:'SolidBlue',
        fatherId:1
    },
    {
        id:10,
        rol:'Gerente 4',
        circleStyled:'SolidBlue',
        fatherId:1
    },
    {
        id:4,
        rol:'Gerente 5',
        circleStyled:'DashedLarimar',
        fatherId:1
    },
    {
        id:5,
        rol:'Subgerente 1',
        circleStyled:'SolidLarimar',
        fatherId:2
    },
    {
        id:6,
        rol:'Subgerente 1',
        circleStyled:'SolidLarimar',
        fatherId:3
    },
    {
        id:7,
        rol:'Subgerente 1',
        circleStyled:'SolidLarimar',
        fatherId:4
    },
    {
        id:8,
        rol:'Analista 2',
        circleStyled:'SolidGray',
        fatherId:7
    },
    {
        id:14,
        rol:'Analista 3',
        circleStyled:'SolidGray',
        fatherId:7
    },
    {
        id:8,
        rol:'Externo',
        circleStyled:'SolidGray',
        fatherId:14
    },
    {
        id:16,
        rol:'Externo 1',
        circleStyled:'SolidGray',
        fatherId:8
    },
];