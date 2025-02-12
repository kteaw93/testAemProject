
package com.nsc.core.models.ncskeypoint.model;


import com.nsc.core.models.ncskeypoint.model.resources.NCSKeyPointResModel;
import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import javax.annotation.PostConstruct;
import java.util.List;

@Model(adaptables = Resource.class)
public class NCSKeyPointModel {

    @Getter @Setter
    @ChildResource(name = "popupItems") private List<NCSKeyPointResModel> popupItems;

    @Getter @Setter
    @ValueMapValue(name = "popupButtonTitle") private String popupButtonTitle;

    @PostConstruct
    protected void init() {

    }

}
