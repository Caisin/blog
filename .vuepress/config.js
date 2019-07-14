module.exports = {
    //开发端口
    port: "3000",
    //编译生成目录
    dest: "docs",
    base: "/",
    title: '流利说笔记',
    description: '英语流利说学习笔记',
    //多语言配置
    //主题配置
    themeConfig: {
        //仓库地址
        repo: "baomidou/mybatis-plus",
        //文档地址
        docsRepo: "baomidou/mybatis-plus-doc",
        editLinks: true,
        nav: [
            {text: '首页', link: '/'},
            {
                text: '商务英语',
                link:"/商务英语/level2"
            },
            {
                text: '懂你英语',
                link:"/懂你英语/level1"
            }
        ],
        sidebar: {
            "/商务英语/":genSwSideBar(),
            "/懂你英语/":genDnSideBar(),
        }
    }
};
function genSwSideBar(){
    return [
        {
            title: "商务英语",
            collapsable: false,
            children: [
                "level2",
                "level3",
                "level4",
                "level5",
            ]
        }
    ]
}

function genDnSideBar(){
    return [
        {
            title: "懂你英语",
            collapsable: false,
            children: [
                "level1",
                "level2",
                "level3",
                "level4",
                "level5",
                "level6",
                "level7-u1-p1",
                "level7-u1-p2",
                "level7-u1-p3",
                "level7-u2-p1",
                "level7-u2-p2",
                "level7-u2-p3",
                "level7-u3-p1",
                "level7-u3-p2",
                "level7-u3-p3",
                "level8-u1-p1",
                "level8-u1-p2",
                "level8-u1-p3",
            ]
        }
    ]
}
