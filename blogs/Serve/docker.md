- 查看容器

  ```sh
  docker ps    // 查看正在运行的容器
  docker ps -a // 查看所有容器（包括正在运行或者是退出）
  ```

  

- 进入某个容器

  ```sh
  docker exec -it <container_name> bash
  ```

  

- 查看容器日志

  ```sh
  docker log -f --tail 100 <container_name>
  ```

  -f 持续追踪日志

  --tail n 查看最近n 条日志

- 查看某容器相关信息（在容器启动时定义的环境变量，有挂载到宿主机上哪个目录等等）

  ```sh
  docker inspect  <container_name>
  ```

  也可以先进入容器，再使用 `printenv` 查看当前容器运行时的所有环境变量

- 重启容器

  ```sh
  docker restart <container_name>
  ```

- 退出容器

  ```sh
  exit
  ```

  