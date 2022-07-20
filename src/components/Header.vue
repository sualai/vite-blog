<template>
  <div class="blog-header">
    <div class="logo" @click="dialogFormVisible = true">
      <img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
      <span>{{ userInfo.userName }}</span>
    </div>
    <div class="seach">
      <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" :suffix-icon="Search" />
      <el-dropdown trigger="click">
         <img src="https://p6-passport.byteacctimg.com/img/user-avatar/4a7cb6a77ef3edc32ef89b9ebb02f297~300x300.image" alt="">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goMyPage">我的主页</el-dropdown-item>
            <el-dropdown-item>我的获赞数</el-dropdown-item>
            <el-dropdown-item>浏览记录</el-dropdown-item>
            <el-dropdown-item>我的评论</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
     </div>
  </div>
  <el-dialog v-model="dialogFormVisible" title="登录" width="600px" center :close-on-click-modal="false">
    <el-form :model="form">
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="form.nickname" autocomplete="off" placeholder="请输入用户名" >
          <template  #prepend>
            <el-button :icon="Avatar" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" type="password" show-password autocomplete="off" placeholder="请输入密码" >
          <template  #prepend>
            <el-button :icon="ZoomIn" />
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleLogin"
          >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
  // import { ref } from 'vue' 

  import { Avatar ,ZoomIn} from '@element-plus/icons-vue'
  import { login } from "../api/user"
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const input2 = ref('')
  const userInfo = reactive({
    userName: 'MALOM'
  })
  const dialogFormVisible = ref(false)
  const form = reactive({
      nickname: '',
      password: ''
    })
    const formLabelWidth = '140px'
  const loginOut = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  const goMyPage = () => {
    router.push('/myCenter')
  }
  // 登录
  const handleLogin = () => {
    console.log(form)
    login(form).then(res=>{
      console.log(res)
      localStorage.setItem('token', res.token)
      dialogFormVisible.value = false
    })
  }

</script>

<style lang="less" scoped>
.blog-header {
  width: 95%;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  .logo {
    width: 50%;
    img {
      vertical-align: middle;
      margin-right: 20px;
    }
    span {
      color: burlywood;
    }
  }
  .seach {
    .w-50 {
      width: 242px;
      margin-right: 20px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>