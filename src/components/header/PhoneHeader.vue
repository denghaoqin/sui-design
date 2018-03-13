<template>
    <nav class="navbar navbar-default sui-navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">SUI-Design</a>
            </div>
            <ul class="nav navbar-nav">
                <li class="active">
                    <a href="#">
                        <i class="glyphicon glyphicon-user"></i> 用户
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-arrow-left"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="glyphicon glyphicon-arrow-right"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        保存
                    </a>
                </li>
                <li>
                    <a href="#">
                        预览
                    </a>
                </li>
                <li>
                    <a href="#">
                        取消
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "phone-header"
};
</script>

<style lang="scss" scoped>
.sui-navbar {
    border-radius: 0px;
    margin-bottom: 0px;
}
</style>