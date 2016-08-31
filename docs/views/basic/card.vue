<style>
    .ex-card-content {
        background: #f5f5f5;
        padding: 1rem;
    }
</style>
<template>
<div class="ex-content">
    <div class="ex-card">
    <mark>
        <textarea class="ex-mark-text">
# Card 卡片

简单的布局卡片

### 示例
        </textarea>
    </mark>
    <div class="ex-card-content">
        <rd-card title="普通卡片标题">
            <p>
                当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
            </p>
        </rd-card>
        <rd-card>
            <p>没有标题</p>
            <p>
                当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
            </p>
        </rd-card>

        <rd-card-group>
            <rd-card class="rd-col-sm-24"  title="在 rd-card-group 中的卡片">
                <p>
                    当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
                </p>
            </rd-card>
            <rd-card class="rd-col-sm-24"  title="在 rd-card-group 中的卡片">
                <p>
                    当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
                </p>
            </rd-card>
        </rd-card-group>
        <rd-card-group>
            <rd-card class="rd-col-sm-24" title="在 rd-card-group 中的卡片" bg-color="#1ae5ff" font-color="#fff">
                <p>
                    当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
                </p>
            </rd-card>
            <rd-card class="rd-col-sm-24"  title="在 rd-card-group 中的卡片" bg-color="#FFC107" font-color="#fff">
                <p>
                    当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
                </p>
            </rd-card>
            <rd-card class="rd-col-sm-24"  title="在 rd-card-group 中的卡片" bg-color="#CDDC39" font-color="#fff">
                <p>
                    当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
                </p>
            </rd-card>
        </rd-card-group>
    </div>
    <mark>
        <textarea class="ex-mark-text">
### 代码
```html
<rd-card title="tag">
    <p>
        当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
    </p>
</rd-card>
```

```html
 <rd-card-group>
    <rd-card title="tag">
        <p>
            当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
        </p>
    </rd-card>
    <rd-card title="tag">
        <p>
            当您使用 Google 服务时，我们可能会收集和处理有关您实际所在位置的信息。我们会使用各种技术进行定位，这些技术包括 IP 地址、GPS 以及能够提供相关信息的其他传感器（比如说可能会为 Google 提供附近设备、Wi-Fi 接入点和基站的信息）。
        </p>
    </rd-card>
</rd-card-group>
```

### API

`props`：

| 参数            | 类型         | 说明           |
| :------------- |:-------------|:--------------|
| title          | String       | 卡片标题       |
| bg-color       | String       | 卡片颜色       |
| font-color     | String       | 卡片字体颜色    |

        </textarea>
    </mark>
    </div>
</div>
</template>
<script>
import { Mark } from '../index'
import {
    rdTag,
    rdCard,
    rdCardGroup
} from 'radon-ui'

export default {
    components: {
        rdCardGroup,
        rdCard,
        rdTag,
        Mark
    }
}
</script>