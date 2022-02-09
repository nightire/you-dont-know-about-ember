import Route from '@ember/routing/route';
import { setRouteComponent } from 'experimental-set-route-component';

const Component = <template>
  Associated route component
</template>

export default class ExampleRoute extends Route {}

setRouteComponent(Component, ExampleRoute);
