//createRouter 创建路由实例 
//createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Company from '@/views/Company/index.vue'
import Access from '@/views/Access/index.vue'
import Info360 from '@/views/Info360/index.vue'
import ModelingService from '@/views/ModelingService/index.vue'
import Info360Service from '@/views/Info360Service/index.vue'
import RobotEyeWalker4D from '@/views/RobotEyeWalker4D/index.vue'
import RobotEyeWalker4DExample from '@/views/RobotEyeWalker4DExample/index.vue'
import BiForArchiCad from '@/views/BiForArchiCad/index.vue'
import BiForArchiCadContent from '@/views/BiForArchiCadContent/index.vue'
import AreaCalculation from '@/views/AreaCalculation/index.vue'
import ArchiCAD from '@/views/ArchiCAD/index.vue'
import ResultsMedia from '@/views/ResultsMedia/index.vue'
import Media20220901 from '@/views/Media20220901/index.vue'
import Media20180904 from '@/views/Media20180904/index.vue'
import Media20161014 from '@/views/Media20161014/index.vue'
import Media20160205 from '@/views/Media20160205/index.vue'
import Media20150708 from '@/views/Media20150708/index.vue'
import Media20150401 from '@/views/Media20150401/index.vue'
import Media20140408 from '@/views/Media20140408/index.vue'
import Media20140212 from '@/views/Media20140212/index.vue'
import Question from '@/views/Question/index.vue'
import Recruit from '@/views/Recruit/index.vue'
import Message from '@/views/Message/index.vue'
import Careers from '@/views/Careers/index.vue'
import Usfactory from '@/views/Usfactory/index.vue'
import LoginForm from '@/views/LoginForm/index.vue'
import BasicInfo from '@/views/BasicInfo/index.vue'
import NumberInfo from '@/views/NumberInfo/index.vue'
import ConfirmationPage from '@/views/ConfirmationPage/index.vue'
import News from '@/views/News/index.vue'
import Login from '@/views/Login/index.vue'
import News20240205 from '@/views/News20240205/index.vue'
import News20231124 from '@/views/News20231124/index.vue'
import News20230611 from '@/views/News20230611/index.vue'
import News20230818 from '@/views/News20230818/index.vue'
import News20230522 from '@/views/News20230522/index.vue'
import News20230512 from '@/views/News20230512/index.vue'
import News20230214 from '@/views/News20230214/index.vue'
import News20221228 from '@/views/News20221228/index.vue'
import News20220823 from '@/views/News20220823/index.vue'
import News20220725 from '@/views/News20220725/index.vue'
import News20220521 from '@/views/News20220521/index.vue'
import LoginNewMember from '@/views/LoginNewMember/index.vue'
import PwForgot from '@/views/PwForgot/index.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    // path和component对应关系的位置
    routes: [

        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/Company',
            component: Company,
        },
        {
            path: '/Access',
            component: Access
        },

        {
            path: '/Question',
            component: Question
        },

        {
            path: '/Recruit',
            component: Recruit
        },
        {
            path: '/Info360',
            component: Info360
        },
        {
            path: '/ModelingService',
            component: ModelingService
        },
        {
            path: '/Info360Service',
            component: Info360Service
        },
        {
            path: '/RobotEyeWalker4D',
            component: RobotEyeWalker4D
        },
        {
            path: '/RobotEyeWalker4DExample',
            component: RobotEyeWalker4DExample
        },
        {
            path: '/BiForArchiCad',
            component: BiForArchiCad,
            name: 'BiForArchiCad'
        },
        {
            path: '/BiForArchiCadContent',
            component: BiForArchiCadContent,
            name: 'BiForArchiCadContent'
        },
        {
            path: '/AreaCalculation',
            component: AreaCalculation,
            name: 'AreaCalculation'
        },
        {
            path: '/ArchiCAD',
            component: ArchiCAD,
            name: 'ArchiCAD'
        },
        {
            path: '/ResultsMedia',
            component: ResultsMedia,
            name: 'ResultsMedia'
        },
        {
            path: '/Media20220901/:title?',
            component: Media20220901,
            name: 'Media20220901'
        },
        {
            path: '/Media20180904/:title?',
            component: Media20180904,
            name: 'Media20180904'
        },
        {
            path: '/Media20161014/:title?',
            component: Media20161014,
            name: 'Media20161014'
        },
        {
            path: '/Media20160205/:title?',
            component: Media20160205,
            name: 'Media20160205'
        },
        {
            path: '/Media20150708/:title?',
            component: Media20150708,
            name: 'Media20150708'

        },
        {
            path: '/Media20150401/:title?',
            component: Media20150401,
            name: 'Media20150401'
        },
        {
            path: '/Media20140408/:title?',
            component: Media20140408,
            name: 'Media20140408'

        },
        {
            path: '/Media20140212/:title?',
            component: Media20140212,
            name: 'Media20140212'

        },
        {
            path: '/Message',
            component: Message
        },
        {
            path: '/Careers',
            component: Careers
        },
        {
            path: '/Usfactory',
            component: Usfactory
        },
        {
            path: '/LoginForm',
            component: LoginForm

        },
        {
            path: '/BasicInfo',
            component: BasicInfo,
            name: BasicInfo,
        },
        {
            path: '/ConfirmationPage',
            name: 'ConfirmationPage',
            component: ConfirmationPage
        },
        // NewsList
        {
            path: '/News',
            name: 'News',
            component: News,
        },
        {
            path: '/News20240205/:title?',
            name: 'News20240205',
            component: News20240205,
            props: true,
        },
        {
            path: '/News20231124/:title?',
            name: 'News20231124',
            component: News20231124,
            props: true,
        },
        {
            path: '/News20230818/:title?',
            name: 'News20230818',
            component: News20230818,
            props: true,
        },
        {
            path: '/News20230611/:title?',
            name: 'News20230611',
            component: News20230611,
            props: true,
        },
        {
            path: '/News20230522/:title?',
            name: 'News20230522',
            component: News20230522,
            props: true,
        },
        {
            path: '/News20230512/:title?',
            name: 'News20230512',
            component: News20230512,
            props: true,
        },
        {
            path: '/News20230214/:title?',
            name: 'News20230214',
            component: News20230214,
            props: true,
        },
        {
            path: '/News20221228/:title?',
            name: 'News20221228',
            component: News20221228,
            props: true,
        },
        {
            path: '/News20220823/:title?',
            name: 'News20220823',
            component: News20220823,
            props: true
        },
        {
            path: '/News20220725/:title?',
            name: 'News20220725',
            component: News20220725,
            props: true
        },
        {
            path: '/News20220521/:title?',
            name: 'News20220521',
            component: News20220521,
            props: true
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/LoginNewMember',
            name: 'LoginNewMember',
            component: LoginNewMember
        },
        {
            path: '/BasicInfo',
            name: 'BasicInfo',
            component: BasicInfo
        },
        {
            path: '/NumberInfo',
            name: 'NumberInfo',
            component: NumberInfo

        },
        {
            path: '/PwForgot',
            name: 'PwForgot',
            component: PwForgot
        },
    ],
    scrollBehavior() {
        return {
            top: 0
        }
    },
})


export default router