const router = [
  {
    title: '首页',
    icon: 'windows',
    key: '/Index'
  },
  {
    title: '用户管理',
    icon: 'user',
    key: '/index/user',
    child: [
      {key: '/index/user/List', title: '用户列表', icon: '',},
      {
        key: '/index/user/Add', 
        title: '添加用户', 
        icon: ''
      }
    ]
  },
  {
    title: '部门管理',
    icon: 'cluster',
    key: '/index/department',
    child: [
      {key: '/index/department/list', title: '部门列表', icon: ''},
      {key: '/index/department/add', title: '添加部门', icon: ''},
    ]
  },
  {
    title: '职位管理',
    icon: 'edit',
    key: '/index/job',
    child: [
      {key: '/index/job/list', title: '职位列表', icon: ''},
      {key: '/index/job/add', title: '添加职位', icon: ''}
    ]
  },
  {
    title: '请假',
    icon: 'question-circle',
    key: '/home/about'
  },
  {
    title: '加班',
    icon: 'global',
    key: '/home/abouta'
  }
]
export default router;