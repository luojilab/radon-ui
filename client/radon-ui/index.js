import './polyfill'
// basic
import rdButton from './components/basic/button.vue'
import rdButtonGroup from './components/basic/buttonGroup.vue'
import rdDropButton from './components/basic/dropButton.vue'
import rdTag from './components/basic/tag.vue'
import rdTable from './components/basic/table.vue'
import rdCard from './components/basic/card.vue'
import rdCardGroup from './components/basic/cardGroup.vue'
import rdSwipe from './components/basic/swipe.vue'

// form
import formItem from './components/form/formItem.vue'
import rdCheckbox from './components/form/checkbox.vue'
import rdText from './components/form/textfield.vue'
import rdTextarea from './components/form/textarea.vue'
import rdEditText from './components/form/editable.vue'
import rdTextSelect from './components/form/rdTextSelect.vue'
import rdRadio from './components/form/radio.vue'
import rdRadioGroup from './components/form/radioGroup.vue'
import rdCascader from './components/form/cascader.vue'
import rdSwitch from './components/form/switch.vue'
import rdSlider from './components/form/slider.vue'
import rdDatepicker from './components/form/datePicker.vue'
import rdSelect from './components/form/select.vue'
import rdTimepicker from './components/form/timePicker.vue'
import rdNumber from './components/form/numberInput.vue'

// common
import rdTooltip from './components/common/toolTip.vue'
import rdAlert from './components/common/alert.vue'
import rdSpin from './components/common/spin.vue'
import rdTimeline from './components/common/timeline.vue'
import rdProgress from './components/common/progress.vue'
import rdProgressCircle from './components/common/progressCircle.vue'
import rdAudio from './components/common/audio.vue'
import rdUpload from './components/common/upload.vue'
import rdTree from './components/common/tree.vue'

// global
import rdModal from './components/global/modal.vue'
import rdNotification from './components/global/notification.vue'
import rdPreview from './components/global/preview.vue'
import rdLoadingbar from './components/global/loadingbar.vue'

// Navigation
import rdBreadcrumb from './components/navigation/breadcrumb.vue'
import rdPagination from './components/navigation/pagination.vue'

// Install
import RadonInstall from './install'

export {
    // basic
    rdButton,
    rdButtonGroup,
    rdDropButton,
    rdTag,
    rdTable,
    rdCard,
    rdCardGroup,
    rdSwipe,

    // form
    rdSelect,
    formItem,
    rdCheckbox,
    rdText,
    rdTextarea,
    rdEditText,
    rdTextSelect,
    rdRadio,
    rdRadioGroup,
    rdCascader,
    rdSwitch,
    rdSlider,
    rdDatepicker,
    rdTimepicker,
    rdNumber,

    // common
    rdTooltip,
    rdAlert,
    rdSpin,
    rdTimeline,
    rdUpload,
    rdAudio,
    rdProgress,
    rdProgressCircle,
    rdTree,

    // global
    rdNotification,
    rdModal,
    rdPreview,
    rdLoadingbar,

    // Navigation
    rdBreadcrumb,
    rdPagination,

    // install
    RadonInstall
}
